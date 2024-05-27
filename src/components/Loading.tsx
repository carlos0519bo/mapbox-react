export const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-4 justify-center items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>

      <h3>Cargando...</h3>
    </div>
  );
};
