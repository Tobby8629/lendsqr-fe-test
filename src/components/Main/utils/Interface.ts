interface Guarantor {
    email:string
    fullname: string
    phone_number:string
    relationship: string
    }
    
 export interface user {
    id: string;
    organization: string;
    user: string;
    phone_number: string;
    Guarantors: Guarantor[];
    bvn: number;
    children: boolean;
    date_joined: string;
    education: string;
    email: string;
    employed: boolean; 
    facebook: string;
    full_name: string
    gender: string;
    instagram: string
    job_duration: number
    job_sector: string
    loan_repay: number
    martial_status: string
    monthly_income: number
    residence_type: string
    status: string
    twitter: string
    Amount: number
    account_number: number
    bank: string
    serial: string
    star: number
}

export interface information {
    id: string,
    organization: string,
    user: string,
    email: string,
    phone_number: string,
    date_joined: string,
    status: string
   }

export interface User_info {
  info: user
}