import { Mail, Phone } from "lucide-react";

type PropsType = {
  title?: string;
  subtitle?: string;
  right?: React.ReactNode;
  bottomLeft?: React.ReactNode;
  phone?: string;
  email?: string;
  children?: React.ReactNode;
};

export default function PageLayout({
  title,
  subtitle,
  bottomLeft,
  right,
  phone,
  email,
  children,
}: PropsType) {
  return (
    <>
      <section className="text section-banner">
        <div className="site-container grid grid-cols-2  pt-24  gap-20">
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                {title && (
                  <h1 className="text-5xl capitalize font-semibold mb-3 text-white">
                    {title}
                  </h1>
                )}
                {subtitle && (
                  <p className="font-light text-lg  text-gray-200">
                    {subtitle}
                  </p>
                )}
              </div>

              <div>
                {phone && (
                  <p className="text-sm  text-gray-100 flex items-center gap-2 mb-1">
                    <Phone className="h-4 w-4 text-secondary" /> {phone}
                  </p>
                )}

                {email && (
                  <p className="text-sm  text-gray-100 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-secondary" /> {email}
                  </p>
                )}
              </div>
            </div>
            <div>{bottomLeft}</div>
          </div>
          <div className="relative">{right}</div>
        </div>
      </section>
      {children}
    </>
  );
}
