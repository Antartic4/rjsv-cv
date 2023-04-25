import React from 'react'
import { ItemInterface } from "@/data/items"

function Item({ item, color }: { item: ItemInterface, color: string }) {
    return (
        <>
            <span className="text-xs">{item.name}</span>
            <div className={`overflow-hidden h-1 mb-2 text-xs flex rounded bg-pink-200`}>
                <div className={`${item.score} shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${color}`}></div>
            </div>
        </>
    )
}

export default Item
