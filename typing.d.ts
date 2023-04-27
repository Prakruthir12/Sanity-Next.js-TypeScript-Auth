export interface Post {
    _id: string;
    title: string;
    description:string;
    mainImage:{
        asset:{
            url:string;
        };
    };
    slug:{
        current: string;
    };
    body: [object];
}

export interface Author {
    _id: string;
    name: string;
    image:{
        asset:{
            url:string;
        };
    };
    slug:{
        current: string;
    };
    bio: string;
}