// add type for UserCard's Props
interface UserCardProps{
    name: string;
    imgUrl: string;
    address: string;
    email: string;

}
export type {UserCardProps};
// add type for UserCardDetail's Props
interface UserCardDetaill {
    email: string;
    address: string;
}
export type {UserCardDetaill};