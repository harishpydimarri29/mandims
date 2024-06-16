"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { convertEnglishToTelugu } from "@/lib/english.to.telugu";
import { CreateUserPayload, createUserPayloadSchema } from "@/types/payloads";
import { MandiUser } from "@/types/entities";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

export default function CreatePage({
  params,
}: {
  params: {
    userType: MandiUser;
  };
}) {
  const { userType } = params;
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isDirty, isSubmitSuccessful },
  } = useForm<CreateUserPayload>({
    defaultValues: {
      userType: userType,
    },
    resolver: zodResolver(createUserPayloadSchema),
  });
  const onSubmit: SubmitHandler<CreateUserPayload> = async (data) => {
    try {
      console.log("Submitted Create User Payload : ", data);
      convertEnglishToTelugu(data.name).then((data) => {
        console.log("Converted Name : ", data);
      })
    } catch (error) {
      console.log("Error while submitting the form : ", error);
    }
  };
  return (
    <main className="mx-2">
      <div className="text-2xl py-4 capitalize">
        Create <b>{userType}</b>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="w-full">
            <Input {...register("name")} placeholder="Full Name" />
            {errors.name?.message && (
              <div className="text-red-500 pt-1 text-sm">{errors.name.message}</div>
            )}
          </div>
          <div className="w-full">
            <Input {...register("phoneNo")} placeholder="Phone Number" />
            {errors.phoneNo?.message && (
              <div className="text-red-500 pt-1 text-sm">
                {errors.phoneNo.message?.toString()}
              </div>
            )}
          </div>
          {userType === "customer" && (
            <>
              <Textarea {...register("address")} placeholder="Address" />
              <Input
                {...register("userRoute")}
                placeholder="User Route ( Street or Room )"
              />
            </>
          )}
          {userType === "merchant" && (
            <>
              <Input
                {...register("merchant.roomNo")}
                placeholder="Room Number"
              />
              <Textarea
                {...register("merchant.items")}
                placeholder="Merchant Available Items"
              />
            </>
          )}
          {userType == "worker" && (
            <Textarea
              {...register("workType")}
              placeholder="Routes or Work Type"
            />
          )}
        </div>
        <br />
        <div className="flex gap-3">
          <Button type="submit">Create</Button>
        </div>
      </form>
    </main>
  );
}
