✏ Minimax Algorithm in Tic Tac Toe

The minimax algorithm is an artificial intelligence technique used to make strategic decisions in two-player turn-based games like Tic Tac Toe. Its goal is to find the best possible move for a player, assuming that the opponent will also play optimally and always try to minimize the player's gain [(https://www.geeksforgeeks.org/dsa/finding-optimal-move-in-tic-tac-toe-using-minimax-algorithm-in-game-theory/)].

📚 ✏️ How does the minimax algorithm work?

1. Simulating all possible moves:  
   The algorithm explores all legal moves from the current position, building a decision tree where each node is a possible board state and each branch is a move [(https://www.geeksforgeeks.org/artificial-intelligence/adversarial-search-algorithms/)].
2. Evaluating terminal states:  
   When a terminal state (win, loss, or draw) is reached, a value or "utility" is assigned to that state, for example:
    ⦁ +10 if the current player wins
    ⦁ -10 if the player loses
    ⦁ 0 if it is a draw
3. Backtracking and value assignment:  
   Nodes are evaluated from the leaves up to the root.
    ⦁ On the player's (Max's) turn, the move that maximizes the value is chosen.
    ⦁ On the opponent’s (Min’s) turn, the move that minimizes the value is chosen, assuming the opponent blocks our objectives [(https://www.geeksforgeeks.org/artificial-intelligence/adversarial-search-algorithms/),(https://en.wikipedia.org/wiki/Minimax)].
4. Selecting the best move:  
   In the end, the algorithm recommends the move that leads to the optimal result, even facing the worst-case scenario (perfect defense by the rival) [(https://www.geeksforgeeks.org/artificial-intelligence/adversarial-search-algorithms/)].

📚 📚 Simple Example in Tic Tac Toe

⦁ If there is an immediate winning move, it is chosen instantly.
⦁ If not, the algorithm recursively calculates the best move by considering all possible future moves and responses from the opponent.

📚 ✏️ Code Implementation

⦁ play: Function that selects and executes the best possible move for the current turn. If there’s a direct winning move (instakill), it takes it. If not, it uses minimax to explore all possible next moves and chooses the one that minimizes the opponent's best responses.
⦁ maxValue and minValue: Recursive functions representing both players’ turns.
    ⦁ maxValue chooses the move that maximizes the utility for the initial player (the "maximizer").
    ⦁ minValue simulates the optimal opponent response, minimizing that utility.
⦁ utility: Assigns a numerical value to the current board state.
⦁ actions, result, and terminal: Help determine possible moves, the outcome of applying a move, and check if the board is in a final state, respectively.

📚 ✏️ Conceptual Summary

Minimax guarantees that the player always makes the best move in every turn, minimizing potential losses against a perfect opponent. It’s ideal for zero-sum games and is widely used in chess, checkers, tic tac toe, and more [(https://www.geeksforgeeks.org/artificial-intelligence/adversarial-search-algorithms/),(https://en.wikipedia.org/wiki/Minimax)].
