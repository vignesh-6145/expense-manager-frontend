import { useEffect, useState } from "react";
import { parsePath, useNavigate, useParams } from "react-router-dom";
import { getExpense, updateExpense } from "../../Services/ExpenseService";

export function UpdateExpense() {
  const { userId, expenseId } = useParams();
  const [expense, setExpense] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    getExpense(userId, expenseId)
      .then((resp) => setExpense(resp.data))
      .catch(console.log("Error"))
      .finally(console.log("Done"));
  }, []);

  function handleDescription(e) {
    const description = e.target.value;
    setExpense({ id: expense.id, description, amount: expense.amount });
  }
  function handleAmount(e) {
    const amount = e.target.value;
    setExpense({ id: expense.id, description: expense.description, amount });
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateExpense(userId, expense)
      .then(navigate(`/expenses/${userId}`))
      .catch((err) => console.log("err" + err))
      .finally("Done");
  }
  return (
    <div className="container">
      <form>
        <div class="form-group row m-2">
          <label for="expenseId" class="col-sm-3 col-form-label">
            Expense Id
          </label>
          <div class="col-sm-6">
            <input
              type="text"
              readonly
              class="form-control-plaintext border-bottom"
              id="expenseId"
              value={expenseId}
            />
          </div>
        </div>
        <div class="form-group row m-2">
          <label for="description" class="col-sm-3 col-form-label">
            Description
          </label>
          <div class="col-sm-6">
            <input
              type="text"
              class="form-control-plaintext border-bottom"
              id="description"
              onChange={handleDescription}
              value={expense.description}
            />
          </div>
        </div>
        <div class="form-group row m-2">
          <label for="amount" class="col-sm-3 col-form-label">
            Amount
          </label>
          <div class="col-sm-6">
            <input
              type="number"
              class="form-control-plaintext border-bottom"
              id="amount"
              onChange={handleAmount}
              value={expense.amount}
            />
          </div>
        </div>
        <button onClick={handleSubmit} className="btn btn-warning m-2">
          Update
        </button>
      </form>
    </div>
  );
}
