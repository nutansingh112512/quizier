import AuthClientGuard from "./AuthClientGuard";

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthClientGuard />
      {children}
    </>
  );
}
