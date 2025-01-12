"use client";

import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { ref, runTransaction } from "firebase/database";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa"

/* eslint-disable @typescript-eslint/no-explicit-any */
export const ButtonHeart = (props: {
  item: any,
  className: string
}) => {
  const { item, className } = props;
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if(user){
        const userId = user.uid;
        if(item.wishlist && item.wishlist[userId]){
          setIsActive(true);
        }
      }
    })
  }, [])

  const toggleWishlist = (uid: string, songId: string) => {
    const songRef = ref(dbFirebase, `/songs/${songId}`);
  
    runTransaction(songRef, (song) => {
      if (song) {
        if (song.wishlist && song.wishlist[uid]) {
          song.wishlist[uid] = null;
          setIsActive(false);
        } else {
          if (!song.wishlist) {
            song.wishlist = {};
          }
          song.wishlist[uid] = true;
          setIsActive(true);
        }
      }
      return song;
    });
  }

  const handleHeart = () => {
    const userId = authFirebase?.currentUser?.uid;

    if(item.id && userId){
      toggleWishlist(userId, item.id);
    }
  }
  return (
    <>
      <button 
        className={
          className + (isActive ? " active" : "")
        }
        onClick={handleHeart}
      >
        <FaHeart />
      </button>
    </>
  )
}