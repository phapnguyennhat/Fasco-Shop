import { z } from 'zod';

export const productSchema = z.object({
    name: z.string().min(3, 'Name must contain at least 3 characters').max(50),
    categoryName: z
        .string()
        .min(3, 'Category name must contain at least 3 characters')
        .max(50),
    tagNames: z
        .array(z.string())
        .nonempty({ message: 'Array must have at least one item' }) // Ít nhất 1 phần tử
        .max(5, { message: 'Array must have at most 5 items' }) // Nhiều nhất 5 phần tử
        .refine((arr) => new Set(arr).size === arr.length, {
            // Không trùng lặp
            message: 'Array items must be unique',
        }),
    brandId: z
        .string()
        .min(3, 'Brand name must contain at least 3 characters')
        .max(50),

   
    
});

export type CreateProduct = z.infer<typeof productSchema>;
