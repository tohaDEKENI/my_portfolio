'use client'
import * as React from "react"
import { SetStateAction } from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type Props = {
    langue: string,
    setLangue: React.Dispatch<SetStateAction<string>>
}

export function SelectDemo({ langue, setLangue }: Props) {

    return (
        <Select onValueChange={(value: string) => {
            setLangue(value)
        }}>
            <SelectTrigger className="w-28">
                <SelectValue

                    placeholder={langue === "Anglais" ? "language" : "langue"}
                />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>
                        {langue === "Anglais" ? "Language" : "Langue"}
                    </SelectLabel>
                    <SelectItem value="Anglais">Anglais</SelectItem>
                    <SelectItem value="Francais">Français</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
