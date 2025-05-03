export type createVerificationWebhook = {
    name: string;
    shop: string;
    email: string;
    address: string;
    order_id: string;
    order_value: string;
    order_timestamp: string;
}

export type registerShopWebhook = {
    shop: string;
    access_token: string;
    public_proxy: string;
}