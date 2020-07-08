import { moviez, seasonz } from "./db"
import { createWriteStream } from "fs"
import path from "path"
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
    Query: {
        movies: () => moviez.find(),
        seasons: () => seasonz.find()
    },
    Mutation: {
        addMovie: async (_, { title, cover }) => {
            const { filename, createReadStream } = await cover;
            await new Promise(res => {
                createReadStream().pipe(createWriteStream(path.join(__dirname, "../../covers", filename)))
                    .on("close", res)
            })
            const movie = new moviez({ title: title, date: new Date(), cover: filename })
            await movie.save()
            return movie
        },
        updateMovie: async (_, { id, title }) => {
            const movie = await moviez.findByIdAndUpdate(
                id,
                { title: title },
                // If `new` isn't true, `findOneAndUpdate()` will return the
                // document as it was _before_ it was updated.
                { new: true, useFindAndModify: false }
            );

            return movie; // 
        },
        addSeason: async (_, { title, episodes, cover }) => {
            const { filename, createReadStream } = await cover;
            await new Promise(res => {
                createReadStream().pipe(createWriteStream(path.join(__dirname, "../../../cashflow.evoton.co.ke/covers", filename)))
                    .on("close", res)
            })
            const season = new seasonz({ title: title, episodes: episodes, date: new Date(), filename })
            await season.save()
            return season
        },
        updateSeason: async (_, { id, title, episodes }) => {
            const season = await seasonz.findByIdAndUpdate(
                id,
                { title: title, episodes: episodes },
                // If `new` isn't true, `findOneAndUpdate()` will return the
                // document as it was _before_ it was updated.
                { new: true, useFindAndModify: false }
            );

            return season; // 
        },

    }
};