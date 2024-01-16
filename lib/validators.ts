import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

export const eventFormSchema = z.object({
    title: z.string().min(3, "Title needs to be at least 3 characters long"),
    description: z.string()
        .min(3, 'Description needs to be at least 3 characters long')
        .max(400, 'Description cannot be longer than 400 characters'),
    location: z.string()
        .min(3, 'Location needs to be at least 3 characters long')
        .max(400, 'Location cannot be longer than 400 characters'),
    imageUrl: z.string().url('Please enter a valid URL'),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url('Please enter a valid URL')   
});