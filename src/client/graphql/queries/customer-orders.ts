import { gql } from "@apollo/client";

export const CUSTOMER_ORDERS_QUERY = gql`
query CustomerOrders {
  usersCollection(filter: {type: {eq: "CUSTOMER"}}) {
      edges {
        node {
          name
          nickname
          phone
          type
          route
          info
          ordersCollection {
            edges {
              node {
                order_number
                total
                order_itemsCollection {
                  edges {
                    node {
                      itemid
                      selling_price
                      bags_count
                      items {
                        name
                        bag_weight
                        pricing_uom
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`