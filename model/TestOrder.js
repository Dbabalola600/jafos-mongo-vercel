import mongoose, { Schema, model, models } from 'mongoose';

const TestOrderSchema = new Schema ({    
    title: {
        type: String,
        required: true,
        unique: false,
      },
      category: {
        type: String,
        required: true,
        unique: false,
      },
      price: {
        type: Number,
        required: true,
        unique: false,
      },
     

      user: {
        type : mongoose.Schema.ObjectId,
        ref: 'Test',
        required: true,
        unique: false
        
      }     
},
{ timestamps: true }
);



const TestOrder = models.TestOrder || model('TestOrder', TestOrderSchema);

export default TestOrder;