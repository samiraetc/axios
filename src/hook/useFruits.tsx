'use client'

import api from "@pages/api/api";
import axios from "axios";
import { useEffect, useState } from "react";

export interface IFruitOptions {
  name: string;
  id: number;
  family: string;
  order: string;
  genus: string;
  nutritions: {
    calories: number;
    fat: number;
    sugar: number;
    carbohydrates: number;
    protein: number;
  };
}

interface IFruit {
  resource: string;
}

export const useFruits = ({ resource }: IFruit) => {
  const [pokemon, setPokemon] = useState<IFruitOptions[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get(resource)
      .then((res) => {
        setPokemon(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err)
        setLoading(false);
      });
    
  }, [resource]);

  return {
    pokemon,
    loading,
  };
};


