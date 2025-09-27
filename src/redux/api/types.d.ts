export declare type UserEntity = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string; //example: "92998-3874"
    geo: {
      lat: string; //example: "-37.3159"
      lng: string; //example: "81.1496"
    };
  };
  phone: string; // example: "1-770-736-8031 x56442"
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export declare type GetUsersDto = UserEntity[];

export declare type StateUserEntity = UserEntity & { phoneExtension: string | undefined };
