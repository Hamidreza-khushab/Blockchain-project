const Block = require("./block");
const { GENESIS_DATA } = require('./config')
describe('Block',()=>{
const timestamp = 'a-data';
const lastHash = 'foo-hash';
const hash = 'bar-hash';
const data = ['blockchain', 'data']
const block = new Block({
    timestamp,
    lastHash,
    hash,
    data
});

it('it has timestamp , lastHash , hash and data property',() =>
{
   expect(block.timestamp).toEqual(timestamp); 
   expect(block.lastHash).toEqual(lastHash); 
   expect(block.hash).toEqual(hash); 
   expect(block.data).toEqual(data); 

});
describe('genesis()',()=>{
    const genesisblock = Block.genesis();
    it('returns a block instance',()=>{
       expect(genesisblock instanceof Block).toEqual(true); 
    })
    it('returns the genesis data ',()=>{
        expect(genesisblock).toEqual(GENESIS_DATA); 
     })
});
describe('mineBlock()',()=>{
    const lastBlock = Block.genesis();
    const data = 'mined data';
    const minedBlock = Block.mineBlock({lastBlock, data});

    it('reutrns a block instance',()=>{
        expect(minedBlock instanceof Block).toEqual(true); 

    });

    it('sets the `lastHash` to the `hash` of the lastBlock a block instance',()=>{
        expect(minedBlock.lastHash).toEqual(lastBlock.hash);

    });

    it('sets the `data`',()=>{
        expect(minedBlock.data).toEqual(data);
        
    });


    it('sets the `timestamp`',()=>{
        expect(minedBlock.timestamp).not.toEqual(undefined);
        
    });
});
});