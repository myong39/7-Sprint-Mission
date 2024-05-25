import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import favicon from "../images/logo/favoriteIcon.svg";
import CallAPI from "../api/CallAPI";
import "../style/AllItemsSection.css"
import SeachInput from "./SeachInput";
import DropDownSort from "./DropDownSort";

function getWidth() {
    let width = window.innerWidth;
    let count = 0;
    if(width < 768) {
        count = 4;
    }
    else if(width < 1280) {
        count = 6;
    }
    else {
        count = 10;
    }

    return count;
}

function AllItem({item}) {
    return (
        <div className="AllItem">
            <img src={item.images[0]} alt={item.name}/>
            <div className="ItemHistory">
                <p>{item.name}</p>
                <h1>{item.price.toLocaleString()}원</h1>
                <div className="Itemfav">
                    <img src={favicon} alt="하트"></img>
                    <p>{item.favoriteCount}</p>
                </div>
            </div>
        </div>
    );
}

function AllItemsSection() {

    const [AlltItemsList, setAllItemsList] = useState([]);
    const [ItemCount, setItemCount] = useState(getWidth());
    const [Order, setOrder] = useState("recent");
    const [Poninter, setPoninter] = useState(1);

    const AllItemsLoad = async (ItemCount) => {
        const response = await CallAPI(Poninter, ItemCount, Order);
        setAllItemsList(response.list);
    };
    useEffect(() => {

        const ReCount = () => {
            const newWidth = getWidth();
            setItemCount(newWidth);
        };

        window.addEventListener("resize", ReCount);

        return () => {
            window.removeEventListener("resize", ReCount);
        };
    }, []);
    
    useEffect(() => {
        AllItemsLoad(ItemCount, Order);
    }, [ItemCount, Order]);

    return (
        <div className="AllItemLayer">
            <div className="AllItemMenu">
                <h1>전체 상품</h1>
                <div className="ItemCustom">
                    <SeachInput></SeachInput>
                    <Link to="/additem"><button className="AddItemButton">상품 등록하기</button></Link>
                    <DropDownSort setOrder={setOrder}></DropDownSort>
                </div>
            </div>
            <div className="ItemList">
                {AlltItemsList.map((item) => (
                    <AllItem item={item} key={item.id}></AllItem>
                ))}
            </div>
        </div>
    );
}

export default AllItemsSection;