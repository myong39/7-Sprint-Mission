import { useRouter } from "next/router";

export default function List(){
    const router=useRouter();
    const {id}=router.query;
}