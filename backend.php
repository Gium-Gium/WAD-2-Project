class Account {
    private $name;
    private $email;
    public $walletAmount;
    public $ownedCoins = []

    function __construct($name,$email,$walletAmount, $ownedCoins){
        $this->name = $name;
        $this->email = $email;
        $this->walletAmount = $walletAmount;
        $this->ownedCoins = $ownedCoins;
    }

    function setWallet(){
        $this->walletAmount = 5000;
    }

    function buyTransaction($costperqty, $qty, $typeOfCoin){
        $totalcost = $costperqty * $qty;
        $this->walletAmount -= $totalcost;
        $new = true;
        foreach ($ownedCoins as $key =>$value){
            if ($key==$typeOfCoin){
                $new=false
                break
            }
        }
        if ($new == true){
            $ownedCoins.array_push([$typeOfCoin => $qty]);
        }
        else{
            $ownedCoins[$typeOfCoin] += $qty
        }
        
    }
    function sellTransaction($costperqty, $qty, $typeOfCoin){
        $totalcost=$costperqty * $qty;
        $this->walletAmount += $cost;
        foreach ($ownedCoins as $key=>$value){
            if ($key==$typeOfCoin){
                $ownedCoins[$typeOfCoin] -= $qty
                if ($ownedCoins[$typeOfCoin] == 0){
                    unset($ownedCoins[$typeOfCoin])
                }

            }
    }
}

}