import React from "react";

import styles from "@/components/users/UsersForm/UsersForm.module.css";
import { Skeleton } from "primereact/skeleton";

const UsersFormSkeleton = () => {
  return (
    <div className={styles.modal__overlay}>
      <div className={styles.modal__container}>
        <div className="flex flex-column gap-3">
          <div className="bg-blue-500 px-4 py-2 text-white text-xl font-bold border-round-top-2xl">
            <p>Usuario</p>
          </div>

          <div className="flex flex-column gap-4 px-4 py-2">
            <div className="flex flex-column gap-3">
              <Skeleton width="5rem" height="1.5rem" className=""></Skeleton>

              <Skeleton height="2.5rem" className="mb-3"></Skeleton>
            </div>
            <div className="flex flex-column gap-3">
              <Skeleton width="5rem" height="1.5rem" className=""></Skeleton>
              <Skeleton height="2.5rem" className="mb-3"></Skeleton>
            </div>
            <div className="flex flex-column gap-3">
              <Skeleton width="5rem" height="1.5rem" className=""></Skeleton>
              <Skeleton height="2.5rem" className="mb-3"></Skeleton>
            </div>
            <div className="flex flex-column gap-3">
              <Skeleton width="5rem" height="1.5rem" className=""></Skeleton>
              <Skeleton height="2.5rem" className="mb-3"></Skeleton>
            </div>
          </div>

          <div className="flex flex-row p-4 align-items-center justify-content-center gap-3 py-3">
            <Skeleton height="2.5rem" width="15rem" className="mb-3"></Skeleton>
            <Skeleton height="2.5rem" width="15rem" className="mb-3"></Skeleton>
          </div>
          <div className="align-self-end pr-4 pb-4">
            <Skeleton height="2.5rem" width="15rem" className=""></Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersFormSkeleton;
