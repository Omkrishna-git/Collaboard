import { v } from "convex/values";
import { defineTable, defineSchema } from "convex/server";

export default defineSchema({
    boards: defineTable({
        title: v.string(),
        orgId: v.string(),
        authorId: v.string(),
        authorName: v.string(),
        imageUrl: v.string(),
    })
        .index("by_org", ["orgId"])
        .searchIndex("search_title", {
            searchField: "title",
            filterFields: ["orgId"],
        }),

    // making faviorite board or unfavorite
    userFavorites: defineTable({
        orgId: v.string(),
        userId: v.string(),
        boardId: v.id("boards"),
    })
        .index("by_board", ["boardId"])
        .index("by_user_org", ["userId", "orgId"])
        .index("by_user_board", ["userId", "boardId"])
        .index("by_user_board_org", ["userId", "boardId", "orgId"]),

    //Subscription
    // orgSubscription: defineTable({
    //     orgId:v.string(),
    //     stripePriceId: v.string(),
    //     stripeCustomerId: v.string(),
    //     stripeSubscriptionId: v.string(),
    //     stripeCurrentPeriodEnd: v.number(),
    // })
    //     .index("by_org",["orgId"])
    //     .index("by_subscription",["stripeSubscriptionId"])
});