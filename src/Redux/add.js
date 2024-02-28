import {configureStore} from '@reduxjs/toolkit'

import CourseSlice from './slices/add.slice'


export const Card = configureStore ({
   reducer:(
    CourseSlice
    
   )

})


export default Card