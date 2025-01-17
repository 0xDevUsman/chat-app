import zod from 'zod'

export const register = zod.object({
    firstname: zod.string().min(2).max(50),
    lastname: zod.string().min(2).max(50),
    username: zod.string().min(3).max(50),
    email: zod.string().email(),
    password: zod.string().min(6),
})

export const login = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
})
