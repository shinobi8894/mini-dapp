const main = async () => {

      const coffeeContractFactory = await hre.ethers.getContractFactory('CoffeePortal');
      const coffeeContract = await coffeeContractFactory.deploy();
    
      await coffeeContract.deployed();
    
     console.log("Coffee Contract deployed to:", coffeeContract.address);
    };
    
    const runMain = async () => {
      try {
        await main();
        process.exit(0);
      } catch (error) {
        console.log(error);
        process.exit(1);
      }
    };
    
    runMain();
    