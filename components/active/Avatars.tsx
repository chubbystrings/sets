import React from "react";
import Image from "next/image";
import classes from "./avatars.module.scss";
import profilePhoto from "../../public/profile_photo.svg";

export default function Avatars() {
  return (
    <div className={classes.wrapper}>
      <span className={classes.avatar}>
        <Image fill src={profilePhoto} alt="avatar" style={{ left: "-20px" }} />
      </span>
      <span className={classes.avatar}>
        <Image src={profilePhoto} alt="avatar" fill style={{ left: "-35px" }} />
      </span>
      <span className={classes.avatar}>
        <Image src={profilePhoto} alt="avatar" fill style={{ left: "-50px" }} />
      </span>
      <span className={classes.avatar}>
        <Image src={profilePhoto} alt="avatar" fill style={{ left: "-65px" }} />
      </span>
    </div>
  );
}
