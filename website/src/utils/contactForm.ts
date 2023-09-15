import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const zContactForm = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  message: z.string().nonempty(),
});

export type ContactForm = z.infer<typeof zContactForm>;

export const useContactForm = () => {
  return useForm<ContactForm>({
    resolver: zodResolver(zContactForm),
  });
};
