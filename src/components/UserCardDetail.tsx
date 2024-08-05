"use client";

import { IconMailForward, IconMapPins } from "@tabler/icons-react";
//import { UserCardDetail } from "@/libs/types";
import { UserCardDetaill } from "@/libs/types";
export default function UserCardDetail({ email, address }:UserCardDetaill) {
  return (
    <div className="text-center">
      <p>
        <IconMailForward /> {email}
      </p>
      <p>
        <IconMapPins /> {address}
      </p>
    </div>
  );
}
