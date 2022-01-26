import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
    {
        user:{

        },
        orderItems:[{},],
        shippingAddress:{

        },
        paymentMethod:{

        },
        paymentResult:{

        },
        taxPrice:{

        },
        shippingPrice:{

        },
        totalPrice:{

        },
        isPaid:{

        },
        paidAt:{

        },
        isDelivered:{

        },
        deliveredAt:{

        },
    },
    {
        timestamps:true,
    }
);

const Order = mongoose.model('Order',orderSchema);

export default Order;
