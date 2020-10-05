declare namespace Express {
  export interface Request {
    userAuth?: {
      user_id: string;

      person_id: string;

      document: string;

      capitalizer: string;

      role: string;

      permissions: string[];
    };
  }
}
