'use client'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../../ui/select'
const sort = [
    { label: 'Price Low to High', value: 'low-to-high' },
    { label: 'Price High to Low', value: 'high-to-low' },
    { label: 'Avg. Rattings', value: 'avg-ratting' },
]
const Sorting = ({ trigger }: any) => {
    const triggerRef = React.useRef<HTMLButtonElement>(null)
    const [btnWidth, setBtnWidth] = React.useState(0)

    React.useEffect(() => {
        if (triggerRef.current) {
            setBtnWidth(triggerRef.current.offsetWidth)
        }
    }, [triggerRef.current])

    return (
<div className="flex items-center gap-2">
        <label className="font-dm text-sm font-medium text-gray-600 whitespace-nowrap capitalize hidden">
        Sort by:
    </label>
        <Select>           
            <SelectTrigger className={trigger} ref={triggerRef}>
                <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="lg:w-48 rounded-lg" style={{ width: btnWidth }} >
                <SelectGroup>
                    {sort.map((item, index) =>
                        <SelectItem key={index} className="rounded-lg" value={item.value}>
                            {item.label}
                        </SelectItem>
                    )}
                </SelectGroup>
            </SelectContent>
        </Select>
</div>
    )
}

export default Sorting
