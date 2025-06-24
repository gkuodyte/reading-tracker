import { StaticImageData } from "next/image";

export type Article = {
    img: StaticImageData;
    title: string;
    name: string;
    content: string;
    date: string;
};