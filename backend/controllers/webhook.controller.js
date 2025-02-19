import { Webhook } from "svix";
import User from "../models/user.model.js";

export const clerkWebhook = async (req, res) => {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET.trim();
    if (!WEBHOOK_SECRET) {
        return res.status(500).json({ message: "Webhook secret is not set" });
    }
    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(WEBHOOK_SECRET);
    let evt;
    try {
        evt = wh.verify(payload, headers);
    } catch (err) {
        console.error('Failed to verify webhook signature:', err); 
        return res.status(400).json({
            message: "Failed to verify webhook signature",
        });
    }

    console.log('Webhook event received:', evt);

    if (evt.type === 'user.created') {
        console.log("Event data:", evt.data);

        const newUser = new User({
            clerkUserId: evt.data.id,
            username: evt.data.username || evt.data.email_addresses[0].email_address,
            email: evt.data.email_addresses[0].email_address,
            img: evt.data.profile_image_url,
        });
        try {
            await newUser.save();
            console.log('New user saved:', newUser);
        } catch (error) {
            console.error('Error saving new user:', error);
            return res.status(500).json({ message: error.message });
        }
        
    }

    if (evt.type === 'user.updated') {
        try {
            const user = await User.findOne({ clerkUserID: evt.data.id });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            if (evt.data.username) {
                user.username = evt.data.username;
            }
            if (evt.data.email_address) {
                user.email = evt.data.email_address[0].email_address;
            }
            if (evt.data.profile_image_url) {
                user.img = evt.data.profile_image_url;
            }
            await user.save();
            console.log('User updated:', user);
        } catch (error) {
            console.error('Error updating user:', error);
            return res.status(500).json({ message: error.message });
        }
    }

    if (evt.type === 'user.deleted') {
        try {
            await User.deleteOne({ clerkUserID: evt.data.id });
            console.log('User deleted:', evt.data.id);
        } catch (error) {
            console.error('Error deleting user:', error);
            return res.status(500).json({ message: error.message });
        }
    }

    res.status(200).json({ message: "Webhook received" });
};