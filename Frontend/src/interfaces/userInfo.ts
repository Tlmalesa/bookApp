export interface UserInfo{
    address:{
        city:"",
        geo:{
   lat:"",
   lng:""
        },
        street:"",
        suite:"",
        zipcode
    };
    company:{
        bs:"",
        catchPhrase:"",
        name:""
    };
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
}
