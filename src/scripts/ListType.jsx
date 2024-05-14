export const ListType = (categories) => (
    <ul class="filter__type-list">
        {categories.map((category) => (
                <li class="filter__type-item">
                <button type="button" class="filter__type-button">
                    {category}
                    </button>
                </li>
            ))}
            </ul>
        );