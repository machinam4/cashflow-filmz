import { introspectSchema } from "apollo-server";

import mongoose from "mongoose"

export const moviez = mongoose.model("movie",
    {
        title: String,
        episodes: String,
        date: String,
        cover: String
    })

export const seasonz = mongoose.model("season",
    {
        title: String,
        episodes: String,
        date: String,
        cover: String
    })
