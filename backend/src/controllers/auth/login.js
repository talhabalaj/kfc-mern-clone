import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { User } from '../../models/index.js'
import { ApiError } from '../../utils/error.js'
import { catchAsync } from '../../utils/catchAsync.js'

export const login = catchAsync(async (req, res) => {
  const { email, password } = req.body

  const error = new ApiError('Email or Password is not valid', 400)
  const user = await User.findOne({ email })

  if (!user) throw error

  const isPasswordCorrect = await bcrypt.compare(password, user.password)

  if (isPasswordCorrect) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1y',
    })

    // TODO: Add token to cookie

    return res.json({
      message: 'You are logged in',
      data: {
        _id: user._id,
        fullName: user.name,
      },
    })
  }

  throw error
})
