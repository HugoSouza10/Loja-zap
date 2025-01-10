
type PaginationProps  = {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
};

export const Pagination  = ({ totalItems, itemsPerPage, currentPage, onPageChange }: PaginationProps ) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages <= 1) return null; // Oculta a paginação se houver apenas uma página

    return (
        <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    className={`w-6 ml-2 rounded-sm  border ${
                        currentPage === index + 1
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-black"
                    }`}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};
