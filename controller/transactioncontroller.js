import { sql } from "../config/db.js"; 

export async function getTransactionsByUserId(req, res) {
     async (req, res) => {
        
        try {
            const { user_id } = req.params;
        console.log("Fetching transactions for user_id:", user_id);
            const transactions = await sql`
                SELECT * FROM transactions WHERE user_id = ${user_id} ORDER BY created_at DESC
            `;
    
            console.log("Transactions fetched:", transactions);
            res.status(200).json(transactions); // Return the fetched transactions
        } catch (error) {
            console.error("Error fetching transactions:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    } 
    
}

export async function createTransaction(req, res) {
    try {
        const { user_id, title, amount, category } = req.body;
        console.log("Creating transaction:", { user_id, title, amount, category });

        if (!user_id || !title || !amount || !category) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const result = await sql`
            INSERT INTO transactions (user_id, title, amount, category)
            VALUES (${user_id}, ${title}, ${amount}, ${category})
            RETURNING *
        `;

        console.log("Transaction created successfully:", result[0]);
        res.status(201).json(result[0]); // Return the created transaction
    } catch (error) {
        console.error("Error creating transaction:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export async function deleteTransaction(req, res) {
    try {
        const { id } = req.params;
        console.log("Deleting transaction with id:", id);

        const result = await sql`
            DELETE FROM transactions WHERE id = ${id} RETURNING *
        `;

        if (result.length === 0) {
            return res.status(404).json({ error: "Transaction not found" });
        }

        console.log("Transaction deleted successfully:", result[0]);
        res.status(200).json(result[0]); // Return the deleted transaction
    } catch (error) {
        console.error("Error deleting transaction:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export async function getsummaryByUserId(req, res) {
    try {
        const { user_id } = req.params;
        console.log("Fetching summary for user_id:", user_id);

        const summary = await sql`
            SELECT category, SUM(amount) AS total_amount
            FROM transactions
            WHERE user_id = ${user_id}
            GROUP BY category
        `;

        console.log("Summary fetched:", summary);
        res.status(200).json(summary); // Return the summary
    } catch (error) {
        console.error("Error fetching summary:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
