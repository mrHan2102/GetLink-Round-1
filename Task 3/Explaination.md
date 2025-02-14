## We have some issues in the code of task 3

### 1. Using `any` for `blockchain` in `getPriority`

**Problem**
- The function parameter `blockchain` is typed as `any`, which is not ideal.
- This makes the function prone to runtime errors if unexpected values are passed.

**Improvement**
- Use an `enum` or `type` to define valid blockchain values.

---

### 2. Undefined variable `lhsPriority`

**Problem**
- In `sortedBalances`, there's a line:
  ```ts
  if (lhsPriority > -99) { ... }
  ```
- `lhsPriority` is not declared, which causes a runtime error.
- Likely, the intended variable is `balancePriority`.

**Improvement**
- Replace `lhsPriority` with `balancePriority`.

---

### 3. Unnecessary dependencies in `useMemo`

**Problem**
- `useMemo` recalculates when `prices` change, but `prices` **do not affect** filtering and sorting of `balances`.
- This causes **unnecessary re-renders**.

**Improvement**
- Remove `prices` from the dependency array so `useMemo` only recalculates when `balances` change.

---

### 4. Unnecessary looping over `sortedBalances`

**Problem**
- `sortedBalances` is **mapped twice**:
  - Once to create `formattedBalances`.
  - Once to generate `rows`.
- This wastes computation and can be optimized.

**Improvement**
- Format the balances **directly inside the mapping function** that generates `rows`.

---

### 5. Using `index` as `key` in React lists

**Problem**
- `key={index}` is a bad practice because it can cause **performance issues** when the list order changes.

**Improvement**
- Use `balance.currency` as the `key`, assuming it’s unique.

