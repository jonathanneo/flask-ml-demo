class RichnessModel():
    """
    A make belief model that predicts whether you are going to be rich or not. 
    """

    def predict(self, x_values: list) -> bool:
        """
        Predicts whether you are going to be rich. Rich is defined as a person who has net assets of over $1m in Australia. 

        Input: 
        - x_values: [age: int, current_income: float, current_expenses: float, current_assets: float, current_debt: float]

        """
        age = x_values[0]
        current_income = x_values[1]
        current_expenses = x_values[2]
        current_assets = x_values[3]
        current_debt = x_values[4]

        death_age = 80  # median death age in australia

        living_years = death_age - age
        net_income = current_income - current_expenses

        total_lifetime_net_income = living_years * net_income

        total_lifetime_net_assets = current_assets + \
            total_lifetime_net_income - current_debt

        if total_lifetime_net_assets >= 1000000:
            return True
        else:
            return False
