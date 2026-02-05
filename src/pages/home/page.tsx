import React, { useState } from "react";
import InventoryCard from "./inventoryDetail/page";
import { useFormik } from "formik";
import { InventoryValidation } from "../../shared/utils/validation";
import styles from "./style.module.scss";

const dummyInventory = [
  { id: "1", name: "Laptop", category: "Electronics", quantity: 10 },
  { id: "2", name: "Chair", category: "Furniture", quantity: 3 },
  { id: "3", name: "Scarf", category: "Clothing", quantity: 5 },
  { id: "4", name: "Mobile", category: "Electronics", quantity: 7 },
  { id: "5", name: "Table", category: "Furniture", quantity: 0 },
  { id: "6", name: "Jacket", category: "Clothing", quantity: 15 },
  { id: "7", name: "TV", category: "Electronics", quantity: 23 },
  { id: "8", name: "Bed", category: "Furniture", quantity: 9 },
  { id: "9", name: "Shirt", category: "Clothing", quantity: 12 },
];

const Home: React.FC = () => {
  const [items, setItems] = useState(dummyInventory);
  const [selectedItem, setSelectedItem] = useState<
    (typeof dummyInventory)[0] | null
  >(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (item?: (typeof dummyInventory)[0]) => {
    setSelectedItem(item || null);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: selectedItem || {
      id: "",
      name: "",
      category: "",
      quantity: 0,
    },
    validationSchema: InventoryValidation,
    onSubmit: (values) => {
      if (selectedItem) {
        setItems((prev) => prev.map((i) => (i.id === values.id ? values : i)));
      } else {
        setItems((prev) => [...prev, { ...values, id: Date.now().toString() }]);
      }
      closeModal();
    },
  });

  return (
    <div className={styles.home}>
      <h1>Inventory Dashboard</h1>
      <button onClick={() => openModal()} className={styles.addButton}>
        Add Item
      </button>

      <div className={styles.inventoryGrid}>
        {items.map((item) => (
          <InventoryCard
            key={item.id}
            item={item}
            onEdit={(i) => openModal(i)}
            onDelete={handleDelete}
            onView={(i) => setSelectedItem(i)}
          />
        ))}
      </div>

      {modalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedItem ? "Edit Item" : "Add Item"}</h2>
            <form onSubmit={formik.handleSubmit} className={styles.form}>
              <input
                name="name"
                placeholder="Item Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <p className={styles.error}>{formik.errors.name}</p>
              )}

              <input
                name="category"
                placeholder="Category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.category && formik.errors.category && (
                <p className={styles.error}>{formik.errors.category}</p>
              )}

              <input
                name="quantity"
                type="number"
                placeholder="Quantity"
                value={formik.values.quantity}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.quantity && formik.errors.quantity && (
                <p className={styles.error}>{formik.errors.quantity}</p>
              )}

              <button type="submit">{selectedItem ? "Update" : "Add"}</button>
              <button type="button" onClick={closeModal}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
