const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async function getData() {
    try {
        // ดึงข้อมูลจากตาราง 'electric'
        const electric = await prisma.electric.findMany();
        return electric;
    } catch (error) {
        // บันทึกข้อผิดพลาดและส่งออกข้อความแสดงข้อผิดพลาด
        console.error('Error fetching electric data:', error);
        throw new Error('Failed to fetch electric data');
    } finally {
        // ปิดการเชื่อมต่อ Prisma Client
        await prisma.$disconnect();
    }
};
