"use client";

import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { onCreate, onEdit } from "@/actions/form-actions";

import Input from "@/components/ui/Input";
import DropdownSelect from "@/components/ui/DropdownSelect";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import ButtonSecondary from "@/components/ui/ButtonSecondary";
import ButtonUserDelete from "@/components/ui/ButtonUserDelete";

import { User } from "@/interfaces/UserInterface";

import styles from "./UsersForm.module.css";

interface UsersFormProps {
  user?: User[];
}

const UsersForm = ({ user }: UsersFormProps) => {
  const router = useRouter();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = (formData: FormData) => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.get("name")) newErrors.name = "El nombre es obligatorio";
    if (!formData.get("status")) newErrors.status = "El estado es obligatorio";
    if (!formData.get("sector")) newErrors.sector = "El sector es obligatorio";
    return newErrors;
  };

  const statesOptions = [
    { value: "ACTIVO", label: "Activo" },
    { value: "INACTIVO", label: "Inactivo" },
  ];
  const sectorOptions = [{ value: 2000, label: "2000" }];
  const userObj = user && user.length > 0 ? user[0] : null;

  return (
    <div className={styles.modal__overlay}>
      <div className={styles.modal__container}>
        <div className="flex flex-column gap-3">
          <div className="bg-blue-500 px-4 py-2 text-white text-xl font-bold border-round-top-2xl">
            <p>Usuario</p>
          </div>
          <form
            action={async (formData) => {
              const validationErrors = validateForm(formData);
              if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return;
              }

              setErrors({});
              try {
                let userRes;
                if (userObj) {
                  userRes = await onEdit(formData);
                } else {
                  userRes = await onCreate(formData);
                }

                router.push("/users");
              } catch (error) {
                console.error("Error al enviar el formulario", error);
              }
            }}
          >
            <div className="flex flex-column gap-4 px-4 py-2">
              <div className="flex flex-column gap-3">
                <label className="text-gray-700 font-semibold text-lg">
                  Id:
                </label>
                <Input
                  name="id"
                  defaultValue={userObj?.id ? userObj.id : uuidv4()}
                  placeholder="Ingresa el id del usuario"
                  readOnly={true}
                />
              </div>
              <div className="flex flex-column gap-3">
                <label className="text-gray-700 font-semibold text-lg">
                  Nombre:
                </label>
                <Input
                  defaultValue={userObj?.usuario}
                  name="name"
                  placeholder="Ingresa el nombre del usuario"
                  errors={errors.name}
                />
              </div>
              <div className="flex flex-column gap-3">
                <label className="text-gray-700 font-semibold text-lg">
                  Estado:
                </label>
                <DropdownSelect
                  defaultValue={userObj?.estado}
                  name="status"
                  options={statesOptions}
                  optionLabel="label"
                  placeholder="Selecciona un estado"
                  errors={errors.status}
                />
              </div>
              <div className="flex flex-column gap-3">
                <label className="text-gray-700 font-semibold text-lg">
                  Sector:
                </label>
                <DropdownSelect
                  defaultValue={userObj?.sector}
                  name="sector"
                  options={sectorOptions}
                  optionLabel="label"
                  placeholder="Selecciona un sector"
                  errors={errors.sector}
                />
              </div>
            </div>
            <div className="flex flex-row p-4 align-items-center justify-content-center gap-3 py-3">
              <ButtonPrimary
                type="submit"
                label="Confirmar"
                icon="pi pi-check"
              />
              <Link href={"/users"} scroll={false}>
                <ButtonSecondary
                  type="button"
                  label="Cancelar"
                  icon="pi pi-times"
                />
              </Link>
            </div>
          </form>
          {userObj && (
            <div className="align-self-end pr-4 pb-4">
              <ButtonUserDelete userId={userObj?.id} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersForm;
