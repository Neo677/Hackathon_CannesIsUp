# Facteurs pondérés (à adapter)
TRANSPORT_SCORES = {'marche': 5, 'vélo': 4, 'bus': 3, 'voiture': 1}
CAPACITY_THRESHOLD = 50  # personnes/heure

def calculate_eco_score(activity):
    score = 0
    # Mode de transport (40%)
    score += TRANSPORT_SCORES.get(activity['transport'], 0) * 0.4
    
    # Capacité (30%)
    score += min(activity['capacity']/CAPACITY_THRESHOLD, 1) * 3
    
    # Impact environnemental (30%)
    score += (5 - activity['environmental_impact']) * 0.6  # 1-5 échelle
    
    return round(score * 2)  # Converti en 0-10 → étoiles 