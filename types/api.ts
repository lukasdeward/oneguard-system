export type OngoingVerificationResponse = {
    success: boolean;
    message?: string;
    data?: {
      displayName: string | null;
      faceScan: boolean;
      necessaryAge: number;
      customerName: string;
      orderName: string;
      orderTimestamp: Date;
    }
}