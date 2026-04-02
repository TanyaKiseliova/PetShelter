import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import PetForm from "../components/PetForm";

const EditPetPage: React.FC = () => {
  const { petId } = useParams<{ petId: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [initialData, setInitialData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.role !== "worker") {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (!petId) return;

    const fetchPet = async () => {
      try {
        const docRef = doc(db, "pets", petId);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          navigate("/pets");
          return;
        }

        const data = docSnap.data();
        setInitialData({
          name: data.name || "",
          species: data.species || "dog",
          breed: data.breed || "",
          age: data.age || 1,
          gender: data.gender || "male",
          photo: data.photo || "",
          color: data.color || "",
          vaccinated: data.vaccinated || false,
          neutered: data.neutered || false,
          character: data.character || "",
          features: data.features || "",
          status: data.status || "available",
          history: data.history || "",
          arrivalDate: data.arrivalDate
            ? data.arrivalDate.substring(0, 10)
            : new Date().toISOString().split("T")[0],
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPet();
  }, [petId, navigate]);

  if (loading) {
    return <div className="container py-5 text-center">Загрузка...</div>;
  }

  return (
    <div className="container py-5 m-3">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow">
            <div className="card-header bg-warning text-dark">
              <h3 className="mb-0">Редактировать питомца</h3>
            </div>
            <div className="card-body">
              {initialData && (
                <PetForm mode="edit" petId={petId} initialData={initialData} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPetPage;
