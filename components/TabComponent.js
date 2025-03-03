"use client"

import TabButtons from "@/components/TabButtons";
import TabContent from "@/components/TabContent";
import { useState } from "react";
export default function TabComponent() {
    const petData = [
        {
            animal: "Cheetah",
            fact: "Cheetahs are the fastest land animals, capable of reaching speeds up to 75 mph.",
            image: "/petsImg/1.jpg",
        },
        {
            animal: "Koala",
            fact: "Koalas sleep around 20 hours a day and are known for their eucalyptus diet.",
            image: "/petsImg/2.jpg",
        },
        {
            animal: "Elephant",
            fact: "Elephants have the largest brains among land animals and demonstrate remarkable intelligence.",
            image: "/petsImg/3.jpg",
        },
        {
            animal: "Zebra",
            fact: "Zebras have distinctive black and white stripes that act as a natural defense against predators.",
            image: "/petsImg/4.jpg",
        },
        {
            animal: "Horse",
            fact: "Horses have excellent memory and are capable of recognizing human emotions.",
            image: "/petsImg/5.jpg",
        },
    ];

    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className="main__container">
            <h1>Choose your pet</h1>
            <TabButtons petData={petData} setActiveTab={setActiveTab} activeTab={activeTab} />
            <TabContent petData={petData} activeTab={activeTab} />
        </div>
    )
}