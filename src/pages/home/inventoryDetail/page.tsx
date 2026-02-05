import React from "react";
import styles from "./style.module.scss";

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
}

interface Props {
  item: InventoryItem;
  onEdit: (item: InventoryItem) => void;
  onDelete: (id: string) => void;
  onView?: (item: InventoryItem) => void;
}

const InventoryCard: React.FC<Props> = ({ item, onEdit, onDelete, onView }) => {
  const status = item.quantity > 0 ? "In Stock" : "Out of Stock";

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{item.name}</h3>
        <span
          className={status === "In Stock" ? styles.inStock : styles.outOfStock}
        >
          {status}
        </span>
      </div>

      <p>
        <strong>Category:</strong> {item.category}
      </p>

      <p>
        <strong>Quantity:</strong> {item.quantity}
      </p>

      <div className={styles.actions}>
        <button onClick={() => onEdit(item)}>Edit</button>
        <button onClick={() => onDelete(item.id)}>Delete</button>
        {onView && <button onClick={() => onView(item)}>View</button>}
      </div>
    </div>
  );
};

export default InventoryCard;
export type { InventoryItem };
